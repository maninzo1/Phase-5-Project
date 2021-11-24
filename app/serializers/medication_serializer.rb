class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :frequency, :image
end
