from django.db import models

# Create your models here.
class Autor(models.Model):
			id_autor      = models.AutoField(db_column="idAutor", primary_key=True)
			nombre        = models.CharField(max_length=25, blank=False, null=False)
			nacionalidad  = models.CharField(max_length=20, blank=False, null=False)
			foto_autor    = models.CharField(max_length=100)

class Libro(models.Model):
			id_libro          = models.AutoField(db_column="idLibro", primary_key=True)
			titulo            = models.CharField( max_length=20)
			año_publicacion   = models.DateField(blank=False, null=False) 
			descripcion_breve = models.CharField(max_length=50)
			portada           = models.CharField(max_length=100,null=True, blank=True)
			
class Categoria(models.Model):
			id_categoria      = models.AutoField(db_column="idCategoria", primary_key=True)
			nombre_categoria  = models.CharField(max_length=25, blank=False, null=False)
			descripcion       = models.CharField(max_length=100)

class NavItem(models.Model):
			id_navItem  = models.AutoField(db_column="idNavItem", primary_key=True)
			titulo      = models.CharField(max_length=20)
			url         = models.CharField(max_length=100,null=True)

