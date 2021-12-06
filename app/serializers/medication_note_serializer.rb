class MedicationNoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user_medication_id, :content

  belongs_to :user
  belongs_to :user_medication
end
