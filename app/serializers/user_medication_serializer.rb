class UserMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dose
  has_one :user
  has_one :medication
end
