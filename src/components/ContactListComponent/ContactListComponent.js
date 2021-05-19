import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Button } from "@material-ui/core";
import ContactComponent from './ContactComponent';
import avatar from '../../assets/boy.png';
import spinner from '../../assets/spinner.gif';



const ContactListComponent = (props) => {
	const [data, setData] = useState([
		{name: "mridul", image: avatar, email: "mridul.verma965@gmail.com"}
	]);
	const [page, setPage] = useState(1);

	const [loading, setLoading] = useState(false);
	const loader = useRef(null);

	useEffect(()=>{
		setLoading(true);
		axios
		.get(
			`https://randomuser.me/api/?results=10`
		)
		.then(res => {
			const response = [...res.data.results].map(item =>  {
				let modifiedResponse = {	
					name: item.name.first,
					image: item.picture.medium,
					email: item.email
				}
				return modifiedResponse;				
			});
			return response;
		}).then(response => {
			setData(prevState => [...prevState, ...response]);
			setLoading( false);
			console.log(data);
		});

	},[]);

    useEffect(() => {
         var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
         };
        // initialize IntersectionObserver
        // and attaching to Load More div
         const observer = new IntersectionObserver(handleObserver, options);
         if (loader.current) {
            observer.observe(loader.current)
         }

    }, []);


    useEffect(() => {
        // here we simulate adding new posts to List
        axios
		.get(
			`https://randomuser.me/api/?results=10`
		)
		.then(res => {
			const response = [...res.data.results].map(item =>  {
				let modifiedResponse = {	
					name: item.name.first,
					image: item.picture.medium,
					email: item.email
				}
				return modifiedResponse;				
			});
			return response;
		}).then(response => {
			setData(prevState => [...prevState, ...response]);
		});
    }, [page])

    // here we handle what happens when user scrolls to Load More div
   // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }



	
	return (
		<div>
			<Button
						style={{
						backgroundColor: "#F8595F",
						color: "white",
						marginBottom: "30px",
						padding: "15px",
						fontSize: "20px",
						fontWeight: "bolder",
						position: "relative",
						right: "-70%"
						}}
						variant="contained"
						// fullWidth="true"
						onClick={() => window.location.href = "/"}
					>
						Logout
					</Button>
			{loading && <img src={spinner} alt="spinner" style={{
				margin: "auto",
				display: "flex"
			}}/ >}
			{
				data.map((item,index) => {
					console.log(item);
					return <ContactComponent data={item} key={index}/>
				})
			}
			{/* ref to load more */}
            <div className="loading" ref={loader}>
                    {loading}
           </div>
		</div>
	);
}

export default ContactListComponent;