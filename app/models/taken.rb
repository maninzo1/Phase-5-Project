class Taken < ApplicationRecord
  belongs_to :user
  belongs_to :user_medication

  def userMedInfo
    self.user_medication.medInfo
  
  end

end
