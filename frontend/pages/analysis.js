import axios from 'axios';
import Link from 'next/link';
import {
	TARGET_BALANCE_TO_PURCHASE,
	TARGET_CREDIT_TO_PURCHASE,
	formatDollarAmount,
	getFormattedPurchaseProgress,
	toFullName,
} from './index';

export default function Analysis({ data }) {
	if (!data) {
		return (
			<div className='flex flex-col items-center justify-start min-h-screen pt-20 pb-12'>
				<h1 className='text-4xl font-bold text-purple mb-8'>
					Error Getting Analysis
				</h1>
			</div>
		);
	}

	const formattedTargetBalance = formatDollarAmount(TARGET_BALANCE_TO_PURCHASE);

	return (
		<div className='flex flex-col items-center justify-start min-h-screen pt-20 pb-12'>
			<h1 className='text-4xl font-bold text-purple mb-8'>Analysis</h1>

			<div className='bg-white shadow-md rounded-lg px-12 py-8 mb-12'>
				<p className='text-xl font-bold text-purple mb-6'>
					Purchase Progress Ranges
				</p>
				<p className='flex-1 text-purple mb-8 max-w-[600px]'>
					{`A breakdown of accounts by their readiness to obtain a mortgage. A
					percentage range describes the progress made toward achieving the
					savings goal and credit score goal of an account that is deemed
					prepared to obtain a mortgage. An account with a balance of ${formattedTargetBalance}
					and a credit score of ${TARGET_CREDIT_TO_PURCHASE} has made 100% progress toward mortgage
					readiness.`}
				</p>
				<div className='space-y-2 w-[300px]'>
					<div className='flex'>
						<p className='flex-1 text-purple font-bold'>Range</p>
						<p className='flex-1 text-purple font-bold'># Accounts</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>0-10%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[0]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>10-20%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[1]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>20-30%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[2]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>30-40%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[3]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>40-50%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[4]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>50-60%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[5]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>60-70%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[6]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>70-80%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[7]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>80-90%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[8]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>90-100%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[9]}</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>100%</p>
						<p className='flex-1 text-purple'>{data.percentageRanges[10]}</p>
					</div>
				</div>
			</div>

			<div className='bg-white shadow-md rounded-lg px-12 py-8 mb-12'>
				<p className='text-xl font-bold text-purple mb-6'>Extremes</p>
				<p className='flex-1 text-purple mb-8 max-w-[600px]'>
					A breakdown of which accounts are a maximum or minimum in purchase
					progress, balance, or credit.
				</p>
				<div className='space-y-8 w-[500px]'>
					<div className='space-y-2'>
						<div className='flex'>
							<p className='flex-1 text-purple font-bold'>Purchase Progress</p>
							<p className='flex-1 text-purple font-bold'>Account</p>
						</div>
						<div className='flex'>
							<p className='flex-1 text-purple'>
								Highest - {data.highestProgress}
							</p>
							<Link href={`/users/${data.highestProgressAccountId}`}>
								<a className='flex-1 text-purple cursor-pointer underline'>
									{data.highestProgressAccountName}
								</a>
							</Link>
						</div>
						<div className='flex'>
							<p className='flex-1 text-purple'>
								Lowest - {data.lowestProgress}
							</p>
							<Link href={`/users/${data.lowestProgressAccountId}`}>
								<a className='flex-1 text-purple cursor-pointer underline'>
									{data.lowestProgressAccountName}
								</a>
							</Link>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='flex'>
							<p className='flex-1 text-purple font-bold'>Balance</p>
							<p className='flex-1 text-purple font-bold'>Account</p>
						</div>
						<div className='flex'>
							<p className='flex-1 text-purple'>
								Highest - {data.highestBalance}
							</p>
							<Link href={`/users/${data.highestBalanceAccountId}`}>
								<a className='flex-1 text-purple cursor-pointer underline'>
									{data.highestBalanceAccountName}
								</a>
							</Link>
						</div>
						<div className='flex'>
							<p className='flex-1 text-purple'>
								Lowest - {data.lowestBalance}
							</p>
							<Link href={`/users/${data.lowestBalanceAccountId}`}>
								<a className='flex-1 text-purple cursor-pointer underline'>
									{data.lowestBalanceAccountName}
								</a>
							</Link>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='flex'>
							<p className='flex-1 text-purple font-bold'>Credit</p>
							<p className='flex-1 text-purple font-bold'>Account</p>
						</div>
						<div className='flex'>
							<p className='flex-1 text-purple'>
								Highest - {data.highestCredit}
							</p>
							<Link href={`/users/${data.highestCreditAccountId}`}>
								<a className='flex-1 text-purple cursor-pointer underline'>
									{data.highestCreditAccountName}
								</a>
							</Link>
						</div>
						<div className='flex'>
							<p className='flex-1 text-purple'>Lowest - {data.lowestCredit}</p>
							<Link href={`/users/${data.lowestCreditAccountId}`}>
								<a className='flex-1 text-purple cursor-pointer underline'>
									{data.lowestCreditAccountName}
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white shadow-md rounded-lg px-12 py-8 mb-12'>
				<p className='text-xl font-bold text-purple mb-6'>Averages</p>
				<p className='flex-1 text-purple mb-8 max-w-[600px]'>
					A breakdown of averages for balance and credit.
				</p>
				<div className='space-y-2 w-[600px]'>
					<div className='flex'>
						<p className='flex-1 text-purple font-bold'>Balance</p>
						<p className='flex-1 text-purple font-bold'>Credit</p>
					</div>
					<div className='flex'>
						<p className='flex-1 text-purple'>{data.averageBalance}</p>
						<p className='flex-1 text-purple'>{data.averageCredit}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const { data } = await axios.get(`${process.env.API_URL}/api/analysis`);

		const highestProgress = getFormattedPurchaseProgress(
			data.highestProgress.balance,
			data.highestProgress.credit
		);
		const lowestProgress = getFormattedPurchaseProgress(
			data.lowestProgress.balance,
			data.lowestProgress.credit
		);
		const highestProgressAccountName = toFullName(
			data.highestProgress.name_first,
			data.highestProgress.name_last
		);
		const lowestProgressAccountName = toFullName(
			data.lowestProgress.name_first,
			data.lowestProgress.name_last
		);
		const highestProgressAccountId = data.highestProgress.id;
		const lowestProgressAccountId = data.lowestProgress.id;
		const highestBalanceRaw = data.highestBalance.balance;
		const highestBalance = formatDollarAmount(highestBalanceRaw);
		const lowestBalanceRaw = data.lowestBalance.balance;
		const lowestBalance = formatDollarAmount(lowestBalanceRaw);
		const highestBalanceAccountName = toFullName(
			data.highestBalance.name_first,
			data.highestBalance.name_last
		);
		const lowestBalanceAccountName = toFullName(
			data.lowestBalance.name_first,
			data.lowestBalance.name_last
		);
		const highestBalanceAccountId = data.highestBalance.id;
		const lowestBalanceAccountId = data.lowestBalance.id;
		const highestCredit = data.highestCredit.credit;
		const lowestCredit = data.lowestCredit.credit;
		const highestCreditAccountName = toFullName(
			data.highestCredit.name_first,
			data.highestCredit.name_last
		);
		const lowestCreditAccountName = toFullName(
			data.lowestCredit.name_first,
			data.lowestCredit.name_last
		);
		const highestCreditAccountId = data.highestCredit.id;
		const lowestCreditAccountId = data.lowestCredit.id;
		const averageBalanceRaw = data.averageBalance;
		const averageBalance = formatDollarAmount(averageBalanceRaw);
		const averageCredit = Math.round(data.averageCredit);

		const analysisData = {
			percentageRanges: data.progressPercentageRanges,
			highestProgress,
			lowestProgress,
			highestProgressAccountName,
			highestProgressAccountId,
			lowestProgressAccountId,
			highestBalanceAccountId,
			lowestBalanceAccountId,
			highestCreditAccountId,
			lowestCreditAccountId,
			lowestProgressAccountName,
			highestBalance,
			lowestBalance,
			highestBalanceAccountName,
			lowestBalanceAccountName,
			highestCreditAccountName,
			lowestCreditAccountName,
			highestCredit,
			lowestCredit,
			averageBalance,
			averageCredit,
		};

		return { props: { data: analysisData } };
	} catch (e) {
		console.error(e);
		return { props: { data: null } };
	}
}
