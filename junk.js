function debugCode(codeProblem) {
    console.log(`🙏 Commencing debugger (debugging) on: '${codeProblem}'...`);
    try {
        const isBugPresent = Math.random() < 0.6; // 60% chance of a bug for fun!
        if (isBugPresent) {
            throw new Error("Cosmic misalignment detected in logic!");
        } else {
            console.log("✨ Outcome: true (Sacca! All is clear.)");
            console.log("Code is return (liberated)!");
            return true;
        }
    } catch (error) {
        console.log(`💔 Outcome: false (Micchā! Catch (${error.message}) caused Error.`);
        return false;
    }
}

// Let's test our standard debugger!
debugCode("My 'if' statement's enlightenment");
debugCode("The elusive asynchronous 'await' bug");
debugCode("Database connection's attachment to old data");