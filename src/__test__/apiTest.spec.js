const supertest = require('supertest');
const request = require('supertest')('http://localhost:4400');

describe("Testing the CrownStack Camera APP APIs", () => {

	// Testing the POST /api/v1/login endpoint
	it("tests the post API for user login", async () => {
		const data = await request.post('/api/v1/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send({
				email: 'abisht24@gmail.com',
				password: 'Gmail@123'
			})
			.expect(200)
		console.log(data.body);
	});

	// Testing the POST /api/v1/getProducts endpoint
	it("tests the post API for getting Products", async () => {
		const data = await request.post('/api/v1/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send({
				email: 'abisht24@gmail.com',
				password: 'Gmail@123'
			})
		const data2 = await request.post('/api/v1/getProducts')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', data.body.result.authorizationToken)
			.send({
				userId: 1,
				pageSize: 1,
				pageNum: 2
			})
			.expect(200)
		console.log(data2.body);
	});

	// Testing the POST /api/v1/insertIntoCart endpoint
	it("tests the post API for inserting products into cart", async () => {
		const data = await request.post('/api/v1/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send({
				email: 'abisht24@gmail.com',
				password: 'Gmail@123'
			})
		const data2 = await request.post('/api/v1/insertIntoCart')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', data.body.result.authorizationToken)
			.send({
				userId: 1,
				products: [
					{
						productId: 1,
						quantity: 1
					},
					{
						productId: 2,
						quantity: 1
					}
				]
			})

			.expect(200)
		console.log(data2.body);
	});

	// Testing the POST /api/v1/getCartDetails endpoint
	it("tests the post API for getting cart detaiils", async () => {
		const data = await request.post('/api/v1/login')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send({
				email: 'abisht24@gmail.com',
				password: 'Gmail@123'
			})
		const data2 = await request.post('/api/v1/getCartDetails')
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', data.body.result.authorizationToken)
			.send({
				userId: 1,
			})

			.expect(200)
		console.log(data2.body);
	});
});

