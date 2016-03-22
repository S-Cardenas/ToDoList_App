class Todo < ActiveRecord::Base
	validates :title, :body, presence: true
	validates :done, inclusion: { in: [true, false] }
	after_initialize :ensure_done

	def ensure_done
		self.done ||= false
	end


end
