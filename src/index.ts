export default {
	async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
		try {
			const res = await fetch(env.DEPLOY_HOOK, {
				method: 'POST',
			});
			const wasSuccessful = res.ok ? 'success' : 'fail';
			console.log(`trigger fired at ${event.cron}: ${wasSuccessful}`);
		} catch (error) {
			if (error instanceof Error) {
				console.error(`trigger fired at ${event.cron}: ${error.message}`);
			} else {
				console.error(`trigger failed at ${event.cron}`);
			}
		}
	},
};
