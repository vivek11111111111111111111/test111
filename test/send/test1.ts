if(Staff_Details[ID == input.search].count() > 0)
temp_search = Staff_Details[ID == input.Search];
input.Name = temp_search.Staff_Name.first_name + " " + temp_search.Staff_Name.last_name;
input.Staff_id = temp_search.Staff_Id;
input.Gender = temp_search.Gender;
input.Email = temp_search.Email;
input.Phone_Number = temp_search.Phone_Number;
