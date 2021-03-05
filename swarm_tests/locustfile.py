from locust import HttpUser, task, between

class SwarmTestUser(HttpUser):
    @task(1)
    def reservations(self):
        self.client.get("https://easyrent-api-test.cit362.com/reservations")
    
    @task(2)
    def customer(self):
        self.client.get("https://easyrent-api-test.cit362.com/customer")

    @task(3)
    def create_res(self):
        self.client.post("https://easyrent-api-test.cit362.com/reservations", { 
        "customerId": "Angie.Abram@test.com", 
        "reservationItems": [ 
        { 
        "description": "Canoe", 
        "itemId": 4949489, 
        "returned": False 
        }, 
        { 
        "description": "Paddle", 
        "returned": True 
        , 
        "itemId": 4949491}, 
        { 
        "description": "LifeJacket", 
        "itemId": 4949488, 
        "returned": False 
        } 
        
        ], 
        "dueDate": 1610148694321 
        } 
        ) 