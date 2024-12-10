"""
URL configuration for hqzen_emails project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import apply_mjml, apply_react_email, apply_maizzle, apply_inky, apply_heml, home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('apply/mjml/', apply_mjml, name='apply_mjml'),
    path('apply/react-email/', apply_react_email, name='apply_react_email'),
    path('apply/maizzle/', apply_maizzle, name='apply_maizzle'),
    path('apply/inky/', apply_inky, name='apply_inky'),
    path('apply/heml/', apply_heml, name='apply_heml'),
]
