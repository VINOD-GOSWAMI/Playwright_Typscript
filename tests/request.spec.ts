import { test, expect, defineConfig, APIResponse, APIRequestContext } from '@playwright/test';
import * as user from '../data/user.json'

test('Create a new user', async ({ request }) => {
  const response = await createUser(request, user);
  await validateResponse(response, user);
  const userId = (await response.json()).id;
  await deleteUser(request, userId);
});

test('Get user details', async ({ request }) => {
  const userObject = getUpdatedUserObject(user);
  const createUserResponse = await createUser(request, userObject);
  await logDetails(createUserResponse);
  await validateResponse(createUserResponse, userObject);
  const userId = (await createUserResponse.json()).id;
  console.log('User Id:', userId);
  const getUserResponse = await getUserDetails(request, userId);
  await validateResponse(getUserResponse, userObject);
  await deleteUser(request, userId);
})

async function validateResponse(response: APIResponse, expectedUser: object): Promise<void> {
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('name', expectedUser['name']);
  expect(responseBody).toHaveProperty('gender', expectedUser['gender']);
  expect(responseBody).toHaveProperty('status', expectedUser['status']);
  expect(responseBody).toHaveProperty('email', expectedUser['email']);
}


// Function to create a new user
async function createUser(request: APIRequestContext, user: object): Promise<any> {
  const response = await request.post('public/v2/users', { data: user });
  expect(response.status()).toBe(201);
  await logDetails(response);
  return response;
}


// Function to get user details by ID
async function getUserDetails(request: APIRequestContext, userId: number): Promise<any> {
  const response = await request.get(`public/v2/users/${userId}`);
  expect(response.status()).toBe(200);
  await logDetails(response);
  return response;
}

// Function to delete a user by ID
async function deleteUser(request: APIRequestContext, userId: number): Promise<any> {
  const response = await request.delete(`public/v2/users/${userId}`);
  expect(response.status()).toBe(204);
  await logDetails(response);
  console.log('Delete Api status', response.status());
  return response;

}

// logging
async function logDetails(response: APIResponse) {
  console.log('Response Status:', response.status());
  console.log('Response text:', await response.text());
  console.log('Response body:', await response.body());
}

// { ...user }; // Create a mutable copy
function getUpdatedUserObject(user: { name: string; gender: string; status: string; email: string; }) {
  user.email = "Johnlegend@singer.com";
  user.gender = "male";
  user.name = "john legend aka legend";
  user.status = "active";
  console.log("Updated user object:", user);
  return user;
}

