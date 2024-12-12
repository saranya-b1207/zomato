import { useForm } from "react-hook-form";
import Button from './Elements/Button';
import { useDispatch } from "react-redux";    
import { setAddress } from "../stores/userInfo/addressSlice";

const AddressForm = ({onTabSwitch}) => {
    const { register, handleSubmit } = useForm();
const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setAddress(data));
        onTabSwitch('payment');
    }
    return (
        <form className='md:w-2/3 md:mx-auto px-3 pt-1  font-serif' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='pt-4 text-2xl md:text-center' >Address for the delivery</h3>
            <div className='mb-4'>
                <label className='block m-2 text-lg font-bold text-gray-800' for="streetAddress"> Street Address:</label>
                <input {...register('address')}
                    className='w-full px-3 py-2 m-2 text-sm leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id="street address"
                    type="text"
                    placeholder='Street Address'
                />
            </div>
            <div className='mb-4 md:flex md:justify-between'>
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <label className='block mb-2 text-sm font-bold text-gray-700' for="city">City</label>
                    <input {...register('city')}
                        className='w-full px-3 py-2 md-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id="City"
                        type="text"
                        placeholder='City'
                    />
                </div>
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <label className='block mb-2 text-sm font-bold text-gray-700' for="state">State</label>
                    <input {...register('city')}
                        className='w-full px-3 py-2 md-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id="State"
                        type="text"
                        placeholder='State'
                    />
                </div>
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <label className='block mb-2 text-sm font-bold text-gray-700' for="country">Country</label>
                    <input {...register('country')}
                        className='w-full px-3 py-2 md-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id="Country"
                        type="text"
                        placeholder='Country'
                    />
                </div>
                 <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <label className='block mb-2 text-sm font-bold text-gray-700' for="pincode">Pincode</label>
                    <input {...register('pincode')}
                        className='w-full px-3 py-2 md-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id="Pincode"
                        type="text"
                        placeholder='Pincode'
                    />
                </div> 
            </div>
       </form>
    );
};

export default AddressForm;
