from django.shortcuts import render
from .models import *
from django.http import JsonResponse

# Create your views here.

def index(request):

	NavItems = NavItem.objects.all()
	Categorias = Categoria.objects.all()
	Autores = Autor.objects.all()
	Libros = Libro.objects.all()
	context = {
		
		"NavItems" : NavItems,
		"Categorias" : Categorias,
		"Autores" : Autores,
		"Libros" : Libros
	}
	return render (request, 'biblioteca/index.html', context)


def autor(request):

	NavItems = NavItem.objects.all()
	Categorias = Categoria.objects.all()
	Autores = Autor.objects.all()
	Libros = Libro.objects.all()
	context = {
		
		"NavItems" : NavItems,
		"Categorias" : Categorias,
		"Autores" : Autores,
		"Libros" : Libros
	}
	return render (request, 'biblioteca/autor.html', context)

def categoria(request):

	NavItems = NavItem.objects.all()
	Categorias = Categoria.objects.all()
	Autores = Autor.objects.all()
	Libros = Libro.objects.all()
	context = {
		
		"NavItems" : NavItems,
		"Categorias" : Categorias,
		"Autores" : Autores,
		"Libros" : Libros
	}
	return render (request, 'biblioteca/categoria.html', context)

def libros(request):

	NavItems = NavItem.objects.all()
	Categorias = Categoria.objects.all()
	Autores = Autor.objects.all()
	Libros = Libro.objects.all()
	context = {
		
		"NavItems" : NavItems,
		"Categorias" : Categorias,
		"Autores" : Autores,
		"Libros" : Libros
	}
	return render (request, 'biblioteca/libros.html', context)



