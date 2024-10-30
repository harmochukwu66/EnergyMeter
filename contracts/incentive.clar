;; Incentive Contract
(define-contract incentives
  (
    (user-address principal)
    (energy-generated uint)
    (renewable-percentage uint)
    (incentive-rate uint)
    (total-incentives-earned uint)
  )

  (
    (get-user-address () user-address)
    (get-energy-generated () energy-generated)
    (get-renewable-percentage () renewable-percentage)
    (get-incentive-rate () incentive-rate)
    (get-total-incentives-earned () total-incentives-earned)
    (record-energy-generation (amount uint renewable-percent uint)
      (begin
        (map-set energy-generated amount)
        (map-set renewable-percentage renewable-percent)
        (let ((incentive-amt (* amount (/ renewable-percent 100) incentive-rate)))
          (map-set total-incentives-earned incentive-amt)
          true
        )
      )
    )
  )
)
