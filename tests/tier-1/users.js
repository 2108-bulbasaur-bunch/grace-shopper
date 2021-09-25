// /* eslint-disable no-unused-expressions */
// import { expect } from "chai";
// import { mount } from "enzyme";
// import sinon from "sinon";
// import React from "react";
// import configureMockStore from "redux-mock-store";
// import thunkMiddleware from "redux-thunk";
// import waitForExpect from "wait-for-expect";
// import { Provider } from "react-redux";
// import * as rrd from "react-router-dom";

// const { MemoryRouter } = rrd;

// const middlewares = [thunkMiddleware];
// const mockStore = configureMockStore(middlewares);
// const initialState = {
// 	allUsers: [],
// };

// import mockAxios from "../mock-axios";
// import { getAllUsers, fetchAllUsers } from "../client/store/allUsers";

// import store from "../client/store";

// import reducer from "../client/store";
// import { createStore } from "redux";

// const { db } = require("../server/db");
// const { User } = require("../server/db/models/User");

// const seed = require("../script/seed");

// import AllUsers from "../components/AllUsers";

// import Routes from "../client/Routes";

// describe("Tier One: AllUsers", () => {
// 	const users = [
// 		{
// 			firstName: "Grace",
// 			lastName: "Peng",
// 			password: "adsasdkj",
// 			email: "buttercup@gmail.com",
// 			shippingAddress: "167 w 74th st New York NY 10004",
// 			isAdmin: true,
// 		},
// 		{
// 			firstName: "Mike",
// 			lastName: "Johnson",
// 			password: "adsfasdjjas",
// 			email: "honeybun@gmail.com",
// 			shippingAddress: "39-02 Union St, Queens, NY 11354",
// 			isAdmin: false,
// 		},
// 	];
// 	beforeEach(() => {
// 		// mockAxios ensures that when our client-side code requests data from the
// 		// server, the request is always successful (even if we haven't implemented)
// 		// our server yet.
// 		mockAxios.onGet("/api/users").replyOnce(200, users);
// 	});
// 	describe("<AllUsers /> component", () => {
// 		const getUsersSpy = sinon.spy();
// 		afterEach(() => {
// 			getUsersSpy.resetHistory();
// 		});

// 		// This test is interested in the unconnected AllUsers component. It is
// 		// exported as a named export in app/components/AllUsers.js
// 		it("renders the users passed in as props", () => {
// 			const wrapper = mount(<AllUsers users={users} getUsers={getUsersSpy} />);
// 			expect(wrapper.text()).to.include("Grace Peng");
// 			expect(wrapper.text()).to.include("Mike Johnson");
// 		});

// 		it("renders DIFFERENT users passed in as props", () => {
// 			const differentUsers = [
// 				{
// 					firstName: "Carl",
// 					lastName: "Jones",
// 					password: "asdfajslkdnaw",
// 					email: "sugarpie@gmail.com",
// 					shippingAddress: "167 W 74th St, New York, NY 10023",
// 					isAdmin: false,
// 				},
// 				{
// 					firstName: "Patricia",
// 					lastName: "Marks",
// 					password: "ewaperituq",
// 					email: "sweatpea@gmail.com",
// 					shippingAddress: "2167 Frederick Douglass Blvd, New York, NY 10026",
// 					isAdmin: false,
// 				},
// 			];
// 			const wrapper = mount(
// 				<AllUsers users={differentUsers} getUsers={getUsersSpy} />
// 			);
// 			expect(wrapper.text()).to.not.include("Grace Peng");
// 			expect(wrapper.text()).to.not.include("Mike Johnson");
// 			expect(wrapper.text()).to.include("Carl Jones");
// 			expect(wrapper.text()).to.include("Patricia Marks");
// 		});

// 		xit('*** renders "No Users" if passed an empty array of users', () => {
// 			throw new Error("replace this error with your own test");
// 		});

// 		// In a later step, we'll create a thunk, and map that thunk to AllUsers
// 		// as getUsers. For right now, we just need to be sure the component
// 		// calls it after it mounts.
// 		xit("calls this.props.getAllUsers after mount", async () => {
// 			mount(<AllUsers users={users} getUsers={getUsersSpy} />);
// 			await waitForExpect(() => {
// 				expect(getUsersSpy).to.have.been.called;
// 			});
// 		});
// 	});

// 	describe("Redux", () => {
// 		let fakeStore;
// 		beforeEach(() => {
// 			fakeStore = mockStore(initialState);
// 		});

// 		describe("set/fetch users", () => {
// 			xit("setUsers action creator returns a valid action", () => {
// 				expect(setUsers(users)).to.deep.equal({
// 					type: "SET_USERS",
// 					users,
// 				});
// 			});

// 			xit("fetchUsers thunk creator returns a thunk that GETs /api/users", async () => {
// 				await fakeStore.dispatch(fetchUsers());
// 				const [getRequest] = mockAxios.history.get;
// 				expect(getRequest).to.not.equal(undefined);
// 				expect(getRequest.url).to.equal("/api/users");
// 				const actions = fakeStore.getActions();
// 				expect(actions[0].type).to.equal("SET_USERS");
// 				expect(actions[0].users).to.deep.equal(users);
// 			});
// 		});

// 		describe("reducer", () => {
// 			let testStore;
// 			beforeEach(() => {
// 				testStore = createStore(rootReducer);
// 			});

// 			xit("*** returns the initial state by default", () => {
// 				throw new Error("replace this error with your own test");
// 			});

// 			xit("reduces on SET_USERS action", () => {
// 				const action = {
// 					type: "SET_USERS",
// 					users,
// 				};

// 				const prevState = testStore.getState();
// 				testStore.dispatch(action);
// 				const newState = testStore.getState();

// 				expect(newState.users).to.be.deep.equal(users);
// 				expect(newState.users).to.not.be.equal(prevState.users);
// 			});
// 		});
// 	});

// 	describe("Connect: react-redux", () => {
// 		// This tests is expecting your component to dispatch a thunk after it mounts
// 		// Remember that getUsers prop from an earlier test? Now's a good time
// 		// for a mapDispatch.
// 		xit("initializes users from the server when the application loads the /users route", async () => {
// 			const reduxStateBeforeMount = store.getState();
// 			expect(reduxStateBeforeMount.users).to.deep.equal([]);
// 			mount(
// 				<Provider store={store}>
// 					<MemoryRouter initialEntries={["/users"]}>
// 						<AllUsers />
// 					</MemoryRouter>
// 				</Provider>
// 			);
// 			await waitForExpect(() => {
// 				const reduxStateAfterMount = store.getState();
// 				expect(reduxStateAfterMount.users).to.deep.equal(users);
// 			});
// 		});

// 		// This test is expecting your component to render the users from the
// 		// Redux store. Now's a good time for a mapState.
// 		xit("<AllUsers /> renders users from the Redux store", async () => {
// 			const wrapper = mount(
// 				<Provider store={store}>
// 					<MemoryRouter initialEntries={["/users"]}>
// 						<AllUsers />
// 					</MemoryRouter>
// 				</Provider>
// 			);
// 			await waitForExpect(() => {
// 				wrapper.update();

// 				const { users: reduxUsers } = store.getState();
// 				reduxUsers.forEach((reduxUsers) => {
// 					expect(wrapper.text()).to.include(reduxUsers.firstName);
// 				});
// 			});
// 		});
// 	});

// 	describe("Navigation", () => {
// 		beforeEach(() => {
// 			sinon.stub(rrd, "BrowserRouter").callsFake(({ children }) => {
// 				return <div>{children}</div>;
// 			});
// 		});
// 		afterEach(() => {
// 			rrd.BrowserRouter.restore();
// 		});

// 		// This test expects that you've set up a Route for AllUsers
// 		xit("renders <AllUsers /> at /users", () => {
// 			const wrapper = mount(
// 				<Provider store={store}>
// 					<MemoryRouter initialEntries={["/users"]}>
// 						<Routes />
// 					</MemoryRouter>
// 				</Provider>
// 			);
// 			expect(wrapper.find(AllUsers)).to.have.length(1);
// 		});
// 	});

// 	describe("Express API", () => {
// 		// Let's test our Express routes WITHOUT actually using the database.
// 		// By replacing the findAll methods on our Sequelize models with a spy,
// 		// we can ensure that our API tests won't fail just because
// 		// our Sequelize models haven't been implemented yet.
// 		const { findAll: userFindAll } = User;
// 		beforeEach(() => {
// 			User.findAll = sinon.spy(() => user);
// 		});
// 		afterEach(() => {
// 			User.findAll = userFindAll;
// 		});

// 		xit("*** GET /api/users responds with all users", async () => {
// 			throw new Error("replace this error with your own test");
// 		});
// 	});

// 	describe("Sequelize Model", () => {
// 		before(() => db.sync({ force: true }));
// 		afterEach(() => db.sync({ force: true }));

// 		xit("has fields firstName, lastName, password, email, shippingAddress, isAdmin", async () => {
// 			const user = await User.create({
// 				firstName: "Peter",
// 				lastName: "Hans",
// 				password: "xmcnvzxc",
// 				email: "peterk@gmail.com",
// 				shippingAddress: "308 E 78th St, New York, NY 10075",
// 				isAdmin: false,
// 			});
// 			expect(user.firstName).to.equal("Peter");
// 			expect(user.lastName).to.equal("Hans");
// 			expect(user.password).to.equal("xmcnvzxc");
// 			expect(user.email).to.equal("peterk@gmail.com");
// 			expect(parseFloat(user.isAdmin)).to.equal(false);
// 		});

// 		xit("requires firstName, lastName, email, password", async () => {
// 			const user = User.build();
// 			try {
// 				await user.validate();
// 				throw Error(
// 					"validation should have failed without firstName, lastName, email, password"
// 				);
// 			} catch (err) {
// 				expect(err.message).to.contain("firstName cannot be null");
// 				expect(err.message).to.contain("lastName cannot be null");
// 				expect(err.message).to.contain("email cannot be null");
// 				expect(err.message).to.contain("password cannot be null");
// 			}
// 		});

// 		xit("firstName, lastName, password, email cannot be empty", async () => {
// 			const user = User.build({
// 				firstName: "",
// 				lastName: "",
// 				email: "",
// 				password: "",
// 			});
// 			try {
// 				await user.validate();
// 				throw Error(
// 					"validation should have failed with empty name and address"
// 				);
// 			} catch (err) {
// 				expect(err.message).to.contain("Validation notEmpty on firstName");
// 				expect(err.message).to.contain("Validation notEmpty on lastName");
// 				expect(err.message).to.contain("Validation notEmpty on email");
// 				expect(err.message).to.contain("Validation notEmpty on password");
// 			}
// 		});

// 		xit("*** email must be a valid email", async () => {
// 			throw new Error("replace this error with your own test");
// 		});
// 	});
// 	describe("Seed file", () => {
// 		beforeEach(seed);

// 		xit("populates the database with at least four users", async () => {
// 			const seededUsers = await User.findAll();
// 			expect(seededUsers).to.have.lengthOf.at.least(4);
// 		});
// 	});
// });
