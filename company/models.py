from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.db import models


class CompanyProject(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(
                            null=True)

    class Meta:
        db_table = "company_project"


class CompanyClient(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(
                            null=True)

    class Meta:
        db_table = "company_clients"


class CompanyEmployee(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(
                            null=True)

    class Meta:
        db_table = "company_employees"
