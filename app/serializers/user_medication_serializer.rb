class UserMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dose, :medication_id, :user_id, :medInfo
 

  belongs_to :user
  belongs_to :medication

  # def user_med
  #   UserMedication.find_by(user_id: current_user.id, medication_id: object.id)
  # end
  
#   def mine
#     self.object.medication.name


# end
end