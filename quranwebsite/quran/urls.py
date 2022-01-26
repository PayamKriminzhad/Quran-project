from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'ayas', views.AyaViewSet)
router.register(r'ayacomments', views.Comments_ayaViewSet)
router.register(r'Hadis', views.HadisViewSet)
router.register(r'contactmessages', views.Messages_contactViewSet)
router.register(r'footermessages', views.Messages_footerViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', views.first_page),
    path('main', views.main_page),
    path('main/<ayaid>', views.details_page),
    path('register', views.register_page),
    # path('details', views.details_page),
    path('contact', views.contact_page),
    path('login', views.login_page),
    path('save', views.save_page),
    path('api', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]