interface RosalesResponseDataError {
	code: number;
	message: string;
}

type RosalesResponseType = 'ok' | 'error';
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type RosalesResponseData = RosalesResponseDataError | any;

export interface RosalesResponse {
	type: RosalesResponseType;
	data: RosalesResponseData;
}

export function rosalesResponse(
	type: RosalesResponseType,
	data: RosalesResponseData,
): RosalesResponse {
	return {
		type,
		data,
	};
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function rosalesOk(data: any) {
	return rosalesResponse('ok', data);
}

export function rosalesError(data: RosalesResponseDataError) {
	return rosalesResponse('error', data);
}
