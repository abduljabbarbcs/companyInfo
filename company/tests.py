import json
import logging

from django.test import TestCase
from django.urls import reverse_lazy
from django.forms import model_to_dict


class SetUp:
  admin_username = 'admin@company.com'
  admin_password = 'asdf1234'


class CompanyInfoAPITest(TestCase):
  fixtures = ['user.json', 'project.json', 'client.json', 'employee.json']

  def setUp(self):
    """
    User/Admin Login Data
    """
    self.data = SetUp
    login_url = '/api/v1/auth/'
    r = self.client.post(login_url, {'username': self.data.admin_username, 'password': self.data.admin_password})
    self.assertEqual(r.status_code, 200)

    api_login_data = r.json()
    self.token = 'Bearer ' + api_login_data['token']

  def test_get_all_projects(self):
    """
    Make a GET request to endpoint "company/api" to
    1. get all projects data
    """
    url = '/api/v1/project/'

    # get all project data
    r = self.client.get(url)
    self.assertEqual(r.status_code, 200)

    api_index_data = r.json()

    self.assertIsNotNone(api_index_data)

  def test_get_all_clients(self):
    """
    Make a GET request to endpoint "company/api" to
    1. get all projects data
    """
    url = '/api/v1/client/'

    # get all project data
    r = self.client.get(url)
    self.assertEqual(r.status_code, 200)

    api_index_data = r.json()

    self.assertIsNotNone(api_index_data)

  def test_get_all_employees(self):
    """
    Make a GET request to endpoint "company/api" to
    1. get all projects data
    """
    url = '/api/v1/employee/'

    # get all project data
    r = self.client.get(url)
    self.assertEqual(r.status_code, 200)

    api_index_data = r.json()

    self.assertIsNotNone(api_index_data)

  def test_add_project(self):
    url = '/api/v1/project/'

    r = self.client.post(url, {}, access_token=self.token)
    self.assertEqual(r.status_code, 400)

    # change devices group with ids and device_group
    r = self.client.post(url, {
      "name": "test",
      "description": "my test"
    }, access_token=self.token)
    self.assertEqual(r.status_code, 201)

  def test_update_project(self):
    url = '/api/v1/project/1/'

    r = self.client.put(url, json.dumps({
      "name": "test1",
      "description": "my test2"
    }), content_type="application/json", access_token=self.token)
    self.assertEqual(r.status_code, 200)

  def test_add_employee(self):
    url = '/api/v1/project/'

    r = self.client.post(url, {}, access_token=self.token)
    self.assertEqual(r.status_code, 400)

    r = self.client.post(url, {
      "name": "test",
      "description": "my test"
    }, access_token=self.token)
    self.assertEqual(r.status_code, 201)

  def test_update_employee(self):
    url = '/api/v1/employee/1/'

    r = self.client.put(url, json.dumps({
      "name": "test1",
      "description": "my test2"
    }), content_type="application/json", access_token=self.token)
    self.assertEqual(r.status_code, 200)

  def test_add_client(self):
    url = '/api/v1/client/'

    r = self.client.post(url, {}, access_token=self.token)
    self.assertEqual(r.status_code, 400)

    r = self.client.post(url, {
      "name": "test",
      "description": "my test"
    }, access_token=self.token)
    self.assertEqual(r.status_code, 201)

  def test_update_client(self):
    url = '/api/v1/client/1/'

    r = self.client.put(url, json.dumps({
      "name": "test1",
      "description": "my test2"
    }), content_type="application/json", access_token=self.token)
    self.assertEqual(r.status_code, 200)

  def tearDown(self):
    self.client.logout()
