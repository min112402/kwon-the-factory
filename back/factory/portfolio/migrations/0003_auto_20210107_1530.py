# Generated by Django 3.1.2 on 2021-01-07 06:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_auto_20201002_2256'),
    ]

    operations = [
        migrations.AddField(
            model_name='goods',
            name='image',
            field=models.ImageField(blank=True, upload_to='goods/image'),
        ),
        migrations.AddField(
            model_name='goods',
            name='production_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='goods',
            name='thumbnail',
            field=models.ImageField(blank=True, upload_to='goods/thumbnail'),
        ),
    ]
