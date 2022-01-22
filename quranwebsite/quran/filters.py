from django.db.models.query import QuerySet
import django_filters
from .models import Aya

class AyaFilter(django_filters.FilterSet):
    
    class Meta:
        model = Aya
        fields = ['joz', 'sura', 'ayaNumber']
