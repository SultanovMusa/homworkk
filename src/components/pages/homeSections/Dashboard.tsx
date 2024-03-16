import { useState } from 'react';
import scss from './Dashboard.module.scss';
import {
	useDeleteProductMutation,
	useGetProductsQuery,
	usePostProductMutation
} from '@/src/redux/api/product';
import { Link } from 'react-router-dom';
import Modal from '../../modalka/Modal';

const Dashboard = () => {
	const [productName, setProductName] = useState<string>('');
	const [quantity, setQuantity] = useState<number | null>(null);
	const [price, setPrice] = useState<number | null>(null);
	const [photoUrl, setPhotoUrl] = useState<string>('');

	const { data, isLoading } = useGetProductsQuery();
	const [postProductMutation] = usePostProductMutation();
	const [deleteProductMutation] = useDeleteProductMutation();

	const productPost = async () => {
		await postProductMutation({
			productName,
			quantity,
			price,
			photoUrl
		});
		setProductName(''),
		setQuantity(null),
		setPrice(null),
		setPhotoUrl(''),
		setIsOpen(false)
	};

	const productDelete = async (_id: string) => {
		await deleteProductMutation(_id);
	};
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className={scss.Dashboard}>
				<div className="container">
					<div className={scss.content}>
						<button className={scss.btn} onClick={openModal}>
							Открыть модальное окно
						</button>
						<Modal isOpen={isOpen} onClose={closeModal}>
							<h1>Welcome </h1>
							<input
								type="text"
								placeholder="productName"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
							/>
							<input
								type="number"
								placeholder="quantity"
								value={'' + quantity}
								onChange={(e) => setQuantity(+e.target.value)}
							/>
							<input
								type="number"
								placeholder="price"
								value={'' + price}
								onChange={(e) => setPrice(+e.target.value)}
							/>
							<input
								type="text"
								placeholder="photoUrl"
								value={photoUrl}
								onChange={(e) => setPhotoUrl(e.target.value)}
							/>
							<button onClick={productPost}>Add</button>
						</Modal>

						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							<>
								<div className={scss.products}>
									{data?.map((item) => (
										<Link key={item._id} to={`/product/${item._id}`}>
											<div className={scss.product}>
												<h1>{item.productName}</h1>
												<p>{item.quantity}</p>
												<p>{item.price}</p>
												<img src={item.photoUrl} alt={item.productName} />
												<button
													onClick={(e) => {
														e.preventDefault();
														productDelete(item._id);
													}}
												>
													Delete
												</button>
											</div>
										</Link>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
