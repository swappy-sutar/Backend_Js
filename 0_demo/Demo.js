async function calldata(){

    try {
        const response = await fetch("https://api.coincap.io/v2/assets");

        if (!response.ok) {
            throw new Error("field to fetch")
        }

        const data = await response.json();
        console.log(data
        );
    } catch (error) {
        console.log(error);    
    }
}
calldata();