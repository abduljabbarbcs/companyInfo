from django.contrib import admin
from company.models import CompanyProject, CompanyEmployee, CompanyClient
# Register your models here.
admin.site.register(CompanyProject)
admin.site.register(CompanyClient)
admin.site.register(CompanyEmployee)
