class UserMedicationDetailSerializer < UserMedicationSerializer
  attributes :medication
  
  belongs_to :user
  belongs_to :medication
end
