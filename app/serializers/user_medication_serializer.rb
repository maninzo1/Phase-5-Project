class UserMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dose, :medication_id, :user_id
  # has_one :user
  # has_one :medication
end
