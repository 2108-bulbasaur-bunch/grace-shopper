import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";
import React from "react";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import waitForExpect from "wait-for-expect";
import { Provider } from "react-redux";
import * as rrd from "react-router-dom";
const app = require("../../server");
const agent = require("supertest")(app);

const { MemoryRouter } = rrd;

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);
const initialState = {
  products: [],
};

import mockAxios from "../mock-axios";
import { setProducts, fetchProducts } from "../../client/store/allProducts";

import store from "../../client/store";

import reducer from "../../app/store";
import { createStore } from "redux";

const { db } = require("../../server/db");
const { Product } = require("../../server/db/models/Product");

const seed = require("../../script/seed");

import AllProducts from "../../client/components/AllProducts";
import SingleProduct from "../../client/components/SingleProduct";
import Routes from "../../client/Routes/";

describe("Tier One: Products", () => {
  const products = [
    {
      name: "Cupcake",
      price: 3.25,
      quantity: 45,
      imageUrl:
        "https://live.staticflickr.com/1109/1035503826_d3eebb6c7c_b.jpg",
      description:
        "Marshmallow jelly beans shortbread toffee lollipop macaroon. Donut cheesecake cotton candy caramels cake gingerbread donut jelly-o muffin. Dragée oat cake marshmallow chocolate cake candy wafer soufflé.",
    },
    {
      name: "Cheesecake",
      price: 15.0,
      quantity: 18,
      imageUrl:
        "https://live.staticflickr.com/3165/2395337982_b18ee7cd19_b.jpg",
      description:
        "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
    },
    {
      name: "Flan",
      price: 515,
      quantity: 44,
      imageUrl: "https://live.staticflickr.com/157/412109682_d0d9061ee3_b.jpg",
      description:
        "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
    },
    {
      name: "Mochi",
      price: 650,
      quantity: 85,
      imageUrl: "https://live.staticflickr.com/5013/5405990686_a0d3943f18.jpg",
      description:
        "Cupcake ipsum dolor sit amet oat cake tootsie roll marzipan. Jujubes croissant marshmallow apple pie cheesecake. Tart macaroon oat cake biscuit tootsie roll. Candy canes oat cake topping pie candy.",
    },
  ];
  beforeEach(() => {
    mockAxios.onGet("/api/products").replyOnce(200, products);
  });

  describe("AllProducts component", () => {
    const getProductSpy = sinon.spy();
    afterEach(() => {
      getProductSpy.resetHistory();
    });

    it("renders the products passed in as props", () => {
      const wrapper = mount(
        <AllProducts products={products} getProducts={getProductSpy} />
      );
      expect(wrapper.text()).to.include("Cupcake");
      expect(wrapper.text()).to.include("Cheesecake");

      const images = wrapper.find("img").map((node) => node.get(0).props.src);
      expect(images).to.include.members([
        "https://live.staticflickr.com/1109/1035503826_d3eebb6c7c_b.jpg",
        "https://live.staticflickr.com/3165/2395337982_b18ee7cd19_b.jpg",
      ]);
    });

    it("renders DIFFERENT products passed in as props"),
      () => {
        const differentProducts = [
          {
            name: "Cupcake",
            price: 3.25,
            quantity: 45,
            imageUrl:
              "https://live.staticflickr.com/1109/1035503826_d3eebb6c7c_b.jpg",
            description:
              "Marshmallow jelly beans shortbread toffee lollipop macaroon. Donut cheesecake cotton candy caramels cake gingerbread donut jelly-o muffin. Dragée oat cake marshmallow chocolate cake candy wafer soufflé.",
          },
          {
            name: "Cheesecake",
            price: 15.0,
            quantity: 18,
            imageUrl:
              "https://live.staticflickr.com/3165/2395337982_b18ee7cd19_b.jpg",
            description:
              "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
          },
        ];
        const wrapper = mount(
          <AllProducts
            products={differentProducts}
            getProducts={getProductSpy}
          />
        );
        expect(wrapper.text()).to.not.include("Flan");
        expect(wrapper.text()).to.not.include("Mochi");
        expect(wrapper.text()).to.include("Cupcake");
        expect(wrapper.text()).to.include("Cheesecake");

        const images = wrapper.find("img").map((node) => node.get(0).props.src);
        expect(images).to.include.members([
          "https://live.staticflickr.com/1109/1035503826_d3eebb6c7c_b.jpg",
          "https://live.staticflickr.com/3165/2395337982_b18ee7cd19_b.jpg",
        ]);
      };
  });
});


describe("Redux", () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = mockStore(initialState);
  });

  describe("set/fetch products", () => {
    it("setProducts action creator returns a valid action", () => {
      expect(setProducts(products)).to.deep.equal({
        type: "SET_PRODUCTS",
        products
      });
    });

    it("fetchProducts thunk creator returns a thunk that GETs /api/products", async () => {
      await fakeStore.dispatch(fetchProducts());
      const [getRequest] = mockAxios.history.get;
      expect(getRequest).to.not.equal(undefined);
      expect(getRequest.url).to.equal("/api/products");
      const actions = fakeStore.getActions();
      expect(actions[0].type).to.equal("SET_PRODUCTS");
      expect(actions[0].products).to.deep.equal(products);
    });
  });
