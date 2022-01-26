from .models import Aya
from rest_framework import serializers
from .models import Aya, Comments_aya, Hadis, Messages_contact, Messages_footer
from django.contrib.auth import get_user_model
User = get_user_model()

class AyaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Aya
        fields = ['joz', 'sura', 'ayaNumber', 'text', 'translation', 'language1', 'language2', 'language3', 'language4', 'location', 'tafsir', 'relatedAya', 'count']
class Comments_ayaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comments_aya
        fields = ['aya', 'sender', 'text', 'date', 'likeno']
class HadisSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hadis
        fields = ['imam', 'text', 'pagenumber', 'book']
class Messages_contactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Messages_contact
        fields = ['name', 'username', 'phonenumber', 'email', 'subject', 'message']
class Messages_footerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Messages_footer
        fields = ['name', 'number', 'suggestion', 'is_read']
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'username', 'email', 'password']