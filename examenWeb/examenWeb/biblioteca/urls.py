from django.urls import path, include
from . import views

urlpatterns = [
			path('', views.index, name="index"),
			path('categoria', views.categoria, name="categoria"),
            path('libros', views.libros, name="libros"),
			path('autor', views.autor, name="autor")
		]
