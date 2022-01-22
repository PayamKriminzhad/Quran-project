from django.urls import path
from . import views

urlpatterns = [
    path('', views.first_page),
    path('main', views.main_page),
    path('main/<ayaid>', views.details_page),
    path('register', views.register_page),
    # path('details', views.details_page),
    path('contact', views.contact_page),
    path('login', views.login_page),
    path('save', views.save_page),
]