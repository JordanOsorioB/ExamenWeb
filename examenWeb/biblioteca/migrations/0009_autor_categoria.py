# Generated by Django 4.1.2 on 2024-07-09 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0008_libro_autor_libro_categoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='autor',
            name='categoria',
            field=models.CharField(default='Sin categoria', max_length=50),
            preserve_default=False,
        ),
    ]
