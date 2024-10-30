;; Energy Meter Contract
(define-contract energy-meter
  (
    (owner principal)
    (total-energy-generated uint)
    (total-energy-sold uint)
  )

  (
    (get-owner () owner)
    (get-total-energy-generated () total-energy-generated)
    (get-total-energy-sold () total-energy-sold)
    (record-energy-generation (amount uint)
      (begin
        (map-set total-energy-generated amount)
        true
      )
    )
    (record-energy-sale (amount uint)
      (begin
        (map-set total-energy-sold amount)
        true
      )
    )
  )
)
