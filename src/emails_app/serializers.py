from rest_framework import serializers
import re

class ApplicationSerializer(serializers.Serializer):
    first_name = serializers.CharField(
        required=True, 
        max_length=50, 
        min_length=2,
        error_messages={
            'required': 'First name is required.',
            'max_length': 'First name cannot be longer than 50 characters.',
            'min_length': 'First name must be at least 2 characters long.'
        }
    )
    last_name = serializers.CharField(
        required=True, 
        max_length=50, 
        min_length=2,
        error_messages={
            'required': 'Last name is required.',
            'max_length': 'Last name cannot be longer than 50 characters.',
            'min_length': 'Last name must be at least 2 characters long.'
        }
    )
    job_posting_title = serializers.CharField(
        required=True, 
        max_length=100, 
        min_length=5,
        error_messages={
            'required': 'Job posting title is required.',
            'max_length': 'Job posting title cannot be longer than 100 characters.',
            'min_length': 'Job posting title must be at least 5 characters long.'
        }
    )
    salary = serializers.CharField(
        required=True,
        error_messages={
            'required': 'Salary is required.'
        }
    )

    def validate_first_name(self, value):
        # Ensure first name contains only letters and spaces
        if not re.match(r'^[A-Za-z\s]+$', value):
            raise serializers.ValidationError('First name can only contain letters and spaces.')
        return value

    def validate_last_name(self, value):
        # Ensure last name contains only letters and spaces
        if not re.match(r'^[A-Za-z\s]+$', value):
            raise serializers.ValidationError('Last name can only contain letters and spaces.')
        return value

    def validate_salary(self, value):
        # Ensure salary is a valid number
        try:
            # Remove any commas or currency symbols
            cleaned_value = re.sub(r'[,$]', '', value)
            salary = float(cleaned_value)
            
            # Check if salary is positive
            if salary <= 0:
                raise serializers.ValidationError('Salary must be a positive number.')
            
            return value
        except ValueError:
            raise serializers.ValidationError('Salary must be a valid number.')

    def validate(self, data):
        # Additional cross-field validations can be added here if needed
        return data
