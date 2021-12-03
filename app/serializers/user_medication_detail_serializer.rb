class UserMedicationDetailSerializer < UserMedicationSerializer
  attributes :id,

  belongs_to :user
  belongs_to :medication
end
