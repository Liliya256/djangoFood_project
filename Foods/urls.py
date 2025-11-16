from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('catalog/', views.catalog, name='catalog'),
    path('contact/', views.contact, name='contact'),
    path('update/<int:id>/', views.update, name='update'),
    path('about/', views.about, name='about'),
    path('registration/', include('django.contrib.auth.urls')),
    path('registration/register/', views.register, name='register'),
    
]