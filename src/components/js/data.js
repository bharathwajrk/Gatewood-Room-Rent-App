export const bhkOptions = [
    { value: 'Any', label: 'Any' },
    { value: '1bhk', label: '1bhk' },
    { value: '2bhk', label: '2bhk' },
    { value: '3bhk', label: '3bhk' },
    { value: '4bhk', label: '4bhk' },
    { value: '5bhk', label: '5bhk' },
]

export const bhkOwnerOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5+' },
]

export const minBudgetOptions = [
    { value: 'Min', label: 'Min' },
    { value: 10000, label: '10000' },
    { value: 20000, label: '20000' },
    { value: 30000, label: '30000' },
    { value: 40000, label: '40000' },
    { value: 50000, label: '50000' },
    { value: 75000, label: '75000' },
    { value: 100000, label: '1 Lac' },
    { value: 100001, label: '1+ Lac' },
]

export const maxBudgetOptions = [
    { value: 'Max', label: 'Max' },
    { value: 10000, label: '10000' },
    { value: 20000, label: '20000' },
    { value: 30000, label: '30000' },
    { value: 40000, label: '40000' },
    { value: 50000, label: '50000' },
    { value: 75000, label: '75000' },
    { value: 100000, label: '1 Lac' },
    { value: 100001, label: '1+ Lac' },
]

export const tenantOptions = [
    { value: 'Any', label: 'Any' },
    { value: 'Individual', label: 'Individual' },
    { value: 'Family', label: 'Family' },
]

export const eatingHabits = [
    { value: 'Any', label: 'Any' },
    { value: 'Vegetarian', label: 'Veg' },
    { value: 'Non-Vegetarian', label: 'Non-Veg' },
    { value: 'Vegan', label: 'Vegan' },
]

export const religionList = [
    { value: 'Any', label: 'Any' },
    { value: 'Hindu', label: 'Hindu' },
    { value: 'Muslim', label: 'Muslim' },
    { value: 'Christian', label: 'Christian' },
    { value: 'Other', label: 'Other' },
]

export const waterAminityOptions = [
    { value: 'Any', label: 'Any' },
    { value: 6, label: '6hrs' },
    { value: 12, label: '12hrs' },
    { value: 24, label: '24hrs' },
]

export const powerBackupOptions = [
    { value: 'Any', label: 'Any' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
]

export const propertyType = [
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' },
    { value: 'PG/Hostel', label: 'PG/Hostel' },
    { value: 'Flatmates', label: 'Flatmates' },
]

export const ownership = [
    { value: 'Owner', label: 'Owner' },
    { value: 'Property Manager', label: 'Property Manager'  },
]

export const hostingSteps = [
    { value: '', label: 'step1', id : 1 },
    { value: 'Flat', label: 'step2', id : 2  },
    { value: 'PG/Hostel', label: 'step3', id : 3  },
    { value: 'Flatmates', label: 'step4', id : 4  },
]

export const bhkSelectColourStyles = {
    multiValueLabel: (styles) => ({
        ...styles,
        color: 'rgb(25, 63, 215) !important',
        backgroundColor : 'rgb(205, 232, 187) !important',
      }),
    multiValue: (styles, { data }) => {
        return {
          ...styles,
          backgroundColor: '#FFC6C6',
        };
    },
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: 'rgb(25, 63, 215)',
        ':hover': {
          backgroundColor: '#FFA5A5',
          color: '#DE350B',
        },
    }),
}

export function matchLocation(state, value) {
  return (
    state.location.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export const rooms = [
    {
        "name" : "ABC Executive Stays 20001",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "900",
        "location" : "Adyar, Chennai",
		"address" : "Chennai",
		"city" : "Chennai",
        "rent" : "10000"
    },
    {
        "name" : "ABC Executive Stays 20002",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "2",
        "bedCount" : "3",
        "sqft" : "1050",
        "location" : "Indranagar, Bangalore",
		"address" : "Bangalore",
		"city" : "Bangalore",
        "rent" : "15000"
    },
    {
        "name" : "ABC Executive Stays 20003",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "850",
        "location" : "Pitam Pura, Delhi",
		"address" : "Delhi",
		"city" : "Delhi",
        "rent" : "11000"
    },
    {
        "name" : "ABC Executive Stays 20004",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "950",
        "location" : "Juhu, Mumbai",
		"address" : "Mumbai",
		"city" : "Mumbai",
        "rent" : "11500"
    },
    {
        "name" : "ABC Executive Stays 20005",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "1",
        "sqft" : "700",
        "location" : "T.Nagar, Chennai",
		"address" : "Chennai",
		"city" : "Chennai",
        "rent" : "4000"
    },
    {
        "name" : "ABC Executive Stays 20006",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "2",
        "bedCount" : "4",
        "sqft" : "1250",
        "location" : "Vasai, Mumbai",
		"address" : "Mumbai",
		"city" : "Mumbai",
        "rent" : "25000"
    },
    {
        "name" : "ABC Executive Stays 20007",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "1",
        "sqft" : "600",
        "location" : "Karol Bagh, Delhi",
		"address" : "Delhi",
		"city" : "Delhi",
        "rent" : "6000"
    },
    {
        "name" : "ABC Executive Stays 20008",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "1",
        "sqft" : "650",
        "location" : "Madiwala, Bangalore",
		"address" : "Bangalore",
		"city" : "Bangalore",
        "rent" : "7500"
    },
    {
        "name" : "ABC Executive Stays 20009",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "2",
        "bedCount" : "3",
        "sqft" : "1000",
        "location" : "Pawai, Mumbai",
		"address" : "Mumbai",
		"city" : "Mumbai",
        "rent" : "12000"
    },
    {
        "name" : "ABC Executive Stays 20010",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "900",
        "location" : "Malleshwaram, Bangalore",
		"address" : "Bangalore",
		"city" : "Bangalore",
        "rent" : "10000"
    },
    {
        "name" : "ABC Executive Stays 20011",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "800",
        "location" : "Triplicane, Chennai",
		"address" : "Chennai",
		"city" : "Chennai",
        "rent" : "9000"
    },
    {
        "name" : "ABC Executive Stays 20012",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "1000",
        "location" : "Andheri, Mumbai",
		"address" : "Mumbai",
		"city" : "Mumbai",
        "rent" : "12000"
    },
    {
        "name" : "ABC Executive Stays 20013",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "3",
        "bedCount" : "4",
        "sqft" : "1900",
        "location" : "Bandra, Mumbai",
		"address" : "Mumbai",
		"city" : "Mumbai",
        "rent" : "10000"
    },
    {
        "name" : "ABC Executive Stays 20014",
        "imgURL" : "https://images.oyoroomscdn.com/uploads/hotel_image/39082/medium/c9aac77bfa51a579.jpg",
        "bathCount" : "1",
        "bedCount" : "2",
        "sqft" : "950",
        "location" : "Jayangar, Bangalore",
		"address" : "Bangalore",
		"city" : "Bangalore",
        "rent" : "11750"
    }
]