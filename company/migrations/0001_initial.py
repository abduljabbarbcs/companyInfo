# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-09 11:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyClient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(null=True)),
            ],
            options={
                'db_table': 'company_clients',
            },
        ),
        migrations.CreateModel(
            name='CompanyEmployee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(null=True)),
            ],
            options={
                'db_table': 'company_employees',
            },
        ),
        migrations.CreateModel(
            name='CompanyProject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(null=True)),
            ],
            options={
                'db_table': 'company_project',
            },
        ),
    ]
