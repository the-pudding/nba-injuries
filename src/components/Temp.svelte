<p class="title">
						<span>opponents: {asterisks.opponent.toFixed(1)}</span>
						<span>winner: {asterisks.winner.toFixed(1)}</span>
						<span>------------</span>
						<span>all: {asterisks.all.toFixed(1)}</span>
						<span>others: {asterisks.allNotOpponent.toFixed(1)}</span>
					</p>
					
				</div>
				<div class="dnp">
					<SortTable rows={dnp} {columns} {caption} />
					<ul>
						{#each dnp as { name, bbrID, headshot }}
							{@const src = headshot
								? `assets/headshots/${bbrID}.png`
								: "assets/headshot-default.png"}
							<li>
								<img {src} alt="headshot of {name}" />
								<p>{name}</p>
							</li>
						{/each}
					</ul>
				</div>
				<p class="injured">
					playoff injury rate: {Math.round(percentInjured * 100)}%
				</p>