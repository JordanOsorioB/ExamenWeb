# Generated by Django 4.1.2 on 2024-07-08 23:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0003_alter_autor_nombre_alter_categoria_nombre_categoria_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categoria',
            name='descripcion',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='libro',
            name='descripcion_breve',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='navitem',
            name='titulo',
            field=models.CharField(max_length=35),
        ),
    ]
