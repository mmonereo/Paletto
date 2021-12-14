import './ToastHandler.css';

import { useToaster } from "react-hot-toast";


function ToastHandler(){


	const { toasts, handlers } = useToaster();
	const { startPause, endPause, calculateOffset, updateHeight } = handlers;
	return (
		<div
			onMouseEnter={startPause}
			onMouseLeave={endPause}
		>
			{toasts.map((toast) => {
				const offset = calculateOffset(toast.id, {
					reverseOrder: false,
					margin: 8
				});
				const ref = (el) => {
					if (el && !toast.height) {
						const height = el.getBoundingClientRect().height;
						updateHeight(toast.id, height);
					}
				};
				return (
					<div
						key={toast.id}
						ref={ref}
						style={{
							position: "absolute",
							width: "200px",
							padding: "8px",
							textAlign: "center",
							color: "#f7f7f7",
							background: "#434240",
							transition: "all 0.5s ease-out",
							opacity: toast.visible ? 1 : 0,
							transform: `translateY(${offset}px)`
						}}
					>
						{toast.message}
					</div>
				);
			})}
		</div>
	);
};

export default ToastHandler