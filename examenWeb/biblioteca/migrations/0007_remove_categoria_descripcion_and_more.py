# Generated by Django 4.1.2 on 2024-07-09 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0006_autor_descripcion_alter_libro_descripcion_breve'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categoria',
            name='descripcion',
        ),
        migrations.AddField(
            model_name='categoria',
            name='foto_categoria',
            field=models.CharField(default='desc', max_length=100),
            preserve_default=False,
        ),
    ]
