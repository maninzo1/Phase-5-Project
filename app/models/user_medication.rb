class UserMedication < ApplicationRecord
  belongs_to :user
  belongs_to :medication
  has_many :medication_notes, dependent: :destroy
  has_many :takens, dependent: :destroy

  def medInfo
    self.medication
  
  end


end