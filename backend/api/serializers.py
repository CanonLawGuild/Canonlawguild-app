from rest_framework import serializers
from .models import Publication, DecidedCase, AdvisoryOpinion, Event, Training


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'


class DecidedCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DecidedCase
        fields = '__all__'


class AdvisoryOpinionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvisoryOpinion
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'
