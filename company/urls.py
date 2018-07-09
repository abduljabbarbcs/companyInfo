# Create an API router and register our ViewSets with it.
from django.conf.urls import include, url
from company.views import IndexView
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from company.views import CompanyProjectViewSet, CompanyClientViewSet, CompanyEmployeeViewSet

api_router = DefaultRouter()
api_router.register(r'project', CompanyProjectViewSet)
api_router.register(r'project/(?P<id>\d{1,})/', CompanyProjectViewSet)
api_router.register(r'client', CompanyClientViewSet)
api_router.register(r'client/(?P<id>\d{1,})/', CompanyClientViewSet)
api_router.register(r'employee', CompanyEmployeeViewSet)
api_router.register(r'employee/(?P<id>\d{1,})/', CompanyEmployeeViewSet)

urlpatterns = [
    # API URLs
    url(r'^api/v1/', include(api_router.urls)),

    # JWT Authentication URLs
    url(r'^api/v1/auth/$', obtain_jwt_token),
    url(r'^api/v1/auth/refresh/$', refresh_jwt_token),
    url(r'^api/v1/auth/verify/$', verify_jwt_token),

    # Public URLs
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^login/$', IndexView.as_view(), name='index'),
    url(r'^company/$', IndexView.as_view(), name='index'),
]
