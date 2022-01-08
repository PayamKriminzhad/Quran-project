# from typing_extensions import Self
from django.db.models.query import QuerySet
import django_filters
from .models import Aye

class AyeFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='aye')

    # ordering = django_filters.ChoiceFilter(label="Ordering", choices = 'CHOICES', method = 'filter_by_order')
    class Meta:
        model = Aye
        fields = ['joz', 'aye','soure']



    # class filter_by_order(Self, QuerySet, name):