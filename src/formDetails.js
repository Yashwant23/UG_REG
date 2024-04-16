const forms = [
    {
        Page: 1,
        Des: "hellow welcome to page 1",
        fields: [{ type: 'text', label: 'Name' },
        { type: 'text', label: 'Field 2' },
        { type: 'text', label: 'Field 3' },
        { type: 'text', label: 'Field 4' },
        { type: 'text', label: 'Field 5' },
        { type: 'text', label: 'Field 6' },
        { type: 'text', label: 'Field 7' },
        { type: 'text', label: 'Field 8' },
        { type: 'text', label: 'Field 9' },
        {
            type: 'Dropdown',
            label: 'Select State', // Changed label
            options: [
                { label: "Andhra Pradesh", value: "Andhra Pradesh" },
                { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                { label: "Assam", value: "Assam" },
                { label: "Bihar", value: "Bihar" },
                { label: "Chhattisgarh", value: "Chhattisgarh" },
                { label: "Goa", value: "Goa" },
                { label: "Gujarat", value: "Gujarat" },
                { label: "Haryana", value: "Haryana" },
                { label: "Himachal Pradesh", value: "Himachal Pradesh" },
                { label: "Jharkhand", value: "Jharkhand" },
                { label: "Karnataka", value: "Karnataka" },
                { label: "Kerala", value: "Kerala" },
                { label: "Madhya Pradesh", value: "Madhya Pradesh" },
                { label: "Maharashtra", value: "Maharashtra" },
                { label: "Manipur", value: "Manipur" },
                { label: "Meghalaya", value: "Meghalaya" },
                { label: "Mizoram", value: "Mizoram" },
                { label: "Nagaland", value: "Nagaland" },
                { label: "Odisha", value: "Odisha" },
                { label: "Punjab", value: "Punjab" },
                { label: "Rajasthan", value: "Rajasthan" },
                { label: "Sikkim", value: "Sikkim" },
                { label: "Tamil Nadu", value: "Tamil Nadu" },
                { label: "Telangana", value: "Telangana" },
                { label: "Tripura", value: "Tripura" },
                { label: "Uttar Pradesh", value: "Uttar Pradesh" },
                { label: "Uttarakhand", value: "Uttarakhand" },
                { label: "West Bengal", value: "West Bengal" },
                // Union territories
                { label: "Andaman and Nicobar Islands", value: "Andaman and Nicobar Islands" },
                { label: "Chandigarh", value: "Chandigarh" },
                { label: "Dadra and Nagar Haveli and Daman and Diu", value: "Dadra and Nagar Haveli and Daman and Diu" },
                { label: "The Government of NCT of Delhi", value: "The Government of NCT of Delhi" },
                { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
                { label: "Ladakh", value: "Ladakh" },
                { label: "Lakshadweep", value: "Lakshadweep" },
                { label: "Puducherry", value: "Puducherry" },
            ]
        }
        ]
    },

    {
        Page: 2,
        Des: "Personal Deatils \nEnter Your Personel Details",
        fields: [{ type: 'text', label: 'Jee Main Application Number' },
        { type: 'text', label: 'Institute_Name' },
        { type: 'text', label: 'First_Name' },
        { type: 'text', label: 'Middle_Name' },
        { type: 'text', label: 'Last_Name' },
        { type: 'text', label: 'Email' },
        { type: 'text', label: 'Contact Number' },
        {
            type: 'dropdown', label: 'Category',
            options: [
                { label: "Gen", value: "Gen" },
                { label: "ST", value: "ST" },
                { label: "SC", value: "SC" },
                { label: "OBC", value: "OBC" },]
        },
        { type: 'text', label: 'Allocated Category' },
        { type: 'text', label: 'Date Of Birth' },
        { type: 'text', label: 'Gender' },
        {
            type: 'dropdown', label: 'Preperatory',
            options: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "NO" },]
        },
        {
            type: 'dropdown', label: 'Divyang',
            options: [
                { label: "Yes", value: "Yes" },
                { label: "No", value: "NO" },]
        },
        { type: 'text', label: 'Adhar Number' },
        { type: 'text', label: 'Country' },
        {
            type: 'dropdown',
            label: 'Select State', // Changed label
            options: [
                { label: "Andhra Pradesh", value: "Andhra Pradesh" },
                { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                { label: "Assam", value: "Assam" },
                { label: "Bihar", value: "Bihar" },
                { label: "Chhattisgarh", value: "Chhattisgarh" },
                { label: "Goa", value: "Goa" },
                { label: "Gujarat", value: "Gujarat" },
                { label: "Haryana", value: "Haryana" },
                { label: "Himachal Pradesh", value: "Himachal Pradesh" },
                { label: "Jharkhand", value: "Jharkhand" },
                { label: "Karnataka", value: "Karnataka" },
                { label: "Kerala", value: "Kerala" },
                { label: "Madhya Pradesh", value: "Madhya Pradesh" },
                { label: "Maharashtra", value: "Maharashtra" },
                { label: "Manipur", value: "Manipur" },
                { label: "Meghalaya", value: "Meghalaya" },
                { label: "Mizoram", value: "Mizoram" },
                { label: "Nagaland", value: "Nagaland" },
                { label: "Odisha", value: "Odisha" },
                { label: "Punjab", value: "Punjab" },
                { label: "Rajasthan", value: "Rajasthan" },
                { label: "Sikkim", value: "Sikkim" },
                { label: "Tamil Nadu", value: "Tamil Nadu" },
                { label: "Telangana", value: "Telangana" },
                { label: "Tripura", value: "Tripura" },
                { label: "Uttar Pradesh", value: "Uttar Pradesh" },
                { label: "Uttarakhand", value: "Uttarakhand" },
                { label: "West Bengal", value: "West Bengal" },
                // Union territories
                { label: "Andaman and Nicobar Islands", value: "Andaman and Nicobar Islands" },
                { label: "Chandigarh", value: "Chandigarh" },
                { label: "Dadra and Nagar Haveli and Daman and Diu", value: "Dadra and Nagar Haveli and Daman and Diu" },
                { label: "The Government of NCT of Delhi", value: "The Government of NCT of Delhi" },
                { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
                { label: "Ladakh", value: "Ladakh" },
                { label: "Lakshadweep", value: "Lakshadweep" },
                { label: "Puducherry", value: "Puducherry" },
            ]
        },
        { type: 'text', label: 'City' },
        { type: 'text', label: 'Pincode' },
        { type: 'text', label: 'Permanent Address 1' },
        { type: 'text', label: 'Permanent Address 2' },
        {
            type: 'dropdown', label: 'Blood Group',
            options: [
                { label: "AB+", value: "AB+" },
                { label: "A+", value: "A+" },
                { label: "B+", value: "B+" },
                { label: "O+", value: "O+" },
                { label: "AB-", value: "AB-" },
                { label: "A-", value: "A-" },
                { label: "B-", value: "B-" },
                { label: "O-", value: "O-" },
            ]
        },
        { type: 'text', label: 'Nationality' },
        {
            type: 'dropdown', label: 'Religion',
            options: [
                { label: "Hindu", value: "Hindu" },
                { label: "Muslim", value: "MuslChristian" },
                { label: "Christian", value: "Christian" },
                { label: "Shikh", value: "Shikh" },
            ]
        },
        { type: 'text', label: 'Birthplace' },
        { type: 'file', label: 'Upload Photo' },
        { type: 'file', label: 'Upload Signature' },
        ]
    },
    {
        Page: 3,
        Des: "*Hostel Info Form*",
        fields: [{ type: 'text', label: 'Name in Hindi' },
        { type: 'text', label: 'Martial Stattus' },
        { type: 'text', label: 'Kashmir Immigrant' },
        { type: 'text', label: 'Identification Mark' },
        { type: 'text', label: 'Extra Curricular Activities' },
        { type: 'text', label: 'Other Relevent Info' },
        { type: 'text', label: 'Favourite Past Time' },
        { type: 'text', label: 'Hobbies' },
        { type: 'text', label: 'Admission based on' },
        { type: 'text', label: 'Course Code' },
        { type: 'text', label: 'Course' },
        { type: 'text', label: 'Branch' },
        { type: 'text', label: 'Jee Advanced Rank' },
        { type: 'text', label: 'Jee Advance Category Rank' },
        { type: 'text', label: 'Bank Name (of Student)' },
        { type: 'text', label: 'Account No. (of student)' },
        { type: 'text', label: 'Confirm Account No. (of Student)' },
        { type: 'text', label: 'IFSC Code (of Student)' },

        ]
    },
    {
        Page: 4,
        Des: "Parents Dtails\nEnter your parents Details",
        fields:
            [{ type: 'text', label: 'Father\'s Name' },
            { type: 'text', label: 'Mother\s Name' },
            { type: 'text', label: 'Father\'s Occupation' },
            { type: 'text', label: 'Mother\'s Occupation' },
            { type: 'text', label: 'Father\'s Income' },
            { type: 'text', label: 'Mother\'s Occupation' },
            { type: 'text', label: 'Parent Mobile Number' },
            { type: 'text', label: 'Parent Email ID' },
            { type: 'text', label: 'Guardian Name' },
            { type: 'text', label: 'Gurdian Relation' },
            { type: 'text', label: 'Alternative Mobile No.' },
            { type: 'text', label: 'Alternative Email ID' },
            { type: 'text', label: 'Bank Name (of Parent)' },
            { type: 'text', label: 'Account No. (of Parent)' },
            { type: 'text', label: 'Confirm Account No. (of Parent)' },
            { type: 'text', label: 'IFSC Code (of Parent)' },
            ]
    },
    {
        Page: 5,
        Des: "Demo",
        fields:
            []
    },
    {
        Page: 6,
        Des: "Hostel Details\nCheck Your Hostel Details",
        fields:
            [
                {
                    type: 'dropdown', label: 'Food Habit',
                    options: [
                        { label: "Veg", value: "Veg" },
                        { label: "Non-Veg", value: "Non-Veg" },]
                },
                { type: 'text', label: 'If Having Laptop (Give Details)' },
                { type: 'text', label: 'Model No.' },
                { type: 'text', label: 'Serial No.' },

            ]
    },
    {
        Page: 7,
        Des: "IITISM Email\nInstitute Email Regestration Details",
        fields:
            [
                { type: 'text', label: 'Email Username' },
                { type: 'text', label: 'Email Password' },
            ]
    },
    {
        Page: 8,
        Des: "Fee Details\nFee Details and Recipt",
        fields:
            [
                { type: 'text', label: 'Fee Amount' },
                { type: 'text', label: 'Fee Date' },
                { type: 'text', label: 'Fee Mode' },
                { type: 'text', label: 'Transaction ID' },
            ]
    },

]



export default forms