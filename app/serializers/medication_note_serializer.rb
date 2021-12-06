class MedicationNoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user_medication_id, :content
end
