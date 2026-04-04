// ============================================================
// STATE MACHINE
// ============================================================

export class StateMachine {
  constructor(gameCtx, states, initialState) {
    this.gameCtx = gameCtx;
    this.states = states;
    this.current = null;
    this.currentName = null;
    if (initialState) this.transition(initialState);
  }

  transition(stateName) {
    if (this.current && this.current.exit) {
      this.current.exit(this.gameCtx);
    }
    this.currentName = stateName;
    this.current = this.states[stateName];
    if (this.current && this.current.enter) {
      this.current.enter(this.gameCtx);
    }
  }

  update(dt) {
    if (this.current && this.current.update) {
      this.current.update(dt, this.gameCtx);
    }
  }

  render(ctx) {
    if (this.current && this.current.render) {
      this.current.render(ctx, this.gameCtx);
    }
  }
}
